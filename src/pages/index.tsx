import { GetServerSideProps } from "next";
import { client } from "../lib/prismic";
import Prismic from "prismic-javascript";
import { Document } from "prismic-javascript/types/documents";
import Link from "next/link";
import PrismicDOM from "prismic-dom";
import { stringify } from "querystring";

interface IHomeProps {
    rocommendedProducts: Document[];
}

export default function Home({ rocommendedProducts }: IHomeProps) {
    return (
        <div>
            {rocommendedProducts.map((product) => {
                return (
                    <>
                        <div key={product.id}>
                            <Link href={`/catalog/products/${product.uid}`}>
                                <a>
                                    {PrismicDOM.RichText.asText(
                                        product.data.title
                                    )}
                                </a>
                            </Link>
                            <div> {product.data.description[0].text}</div>
                        </div>
                    </>
                );
            })}
        </div>
    );
}

export const getServerSideProps: GetServerSideProps<IHomeProps> = async () => {
    const rocommendedProducts = await client().query([
        Prismic.Predicates.at("document.type", "product"),
    ]);

    return {
        props: {
            rocommendedProducts: rocommendedProducts.results,
        },
    };
};
