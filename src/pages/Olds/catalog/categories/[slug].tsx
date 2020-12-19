import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { Document } from "prismic-javascript/types/documents";
import Link from "next/link";
import Prismic from "prismic-javascript";
import PrismicDOM from "prismic-dom";
import { client } from "../../../lib/prismic";

interface CateroryProps {
    products: Document[];
    category: Document;
}

export default function Caterory({ category, products }: CateroryProps) {
    const router = useRouter();

    if (router.isFallback) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h1>{PrismicDOM.RichText.asText(category.data.title)}</h1>
            <ul>
                {products.map((product) => {
                    return (
                        <li key={product.id}>
                            <Link href={`/catalog/products/${product.uid}`}>
                                <a>
                                    {PrismicDOM.RichText.asText(
                                        product.data.title
                                    )}
                                </a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const categories = await client().query([
        Prismic.Predicates.at("document.type", "category"),
    ]);

    const paths = categories.results.map((category) => {
        return {
            params: { slug: category.uid },
        };
    });

    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<CateroryProps> = async (
    context
) => {
    const { slug } = context.params;

    const category = await client().getByUID("category", String(slug), {});

    const products = await client().query([
        Prismic.Predicates.at("document.type", "product"),
        Prismic.Predicates.at("my.product.category", category.id),
    ]);

    return {
        props: {
            category,
            products: products.results,
        },
        revalidate: 60,
    };
};
