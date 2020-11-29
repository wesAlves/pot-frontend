import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { client } from "../../../lib/prismic";
import Prismic from "prismic-javascript";
import PrismicDOM from "prismic-dom";
import { Document } from "prismic-javascript/types/documents";

interface ProductProps {
    product: Document;
}

export default function Products({ product }: ProductProps) {
    const router = useRouter();

    if (router.isFallback) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h1>{PrismicDOM.RichText.asText(product.data.title)}</h1>

            <img src={product.data.thumbnail.url} width="100" alt="" />
            <div
                dangerouslySetInnerHTML={{
                    __html: PrismicDOM.RichText.asHtml(
                        product.data.description
                    ),
                }}
            ></div>
            <p>Price: R$: {product.data.price}</p>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<ProductProps> = async (context) => {
    const { slug } = context.params;

    const product = await client().getByUID("product", String(slug), {});

    return {
        props: {
            product,
        },
        revalidate: 10,
    };
};
