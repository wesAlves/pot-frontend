import { Router, useRouter } from "next/router";
import React, { FormEvent, useState } from "react";
import { Document } from "prismic-javascript/types/documents";
import Prismic from "prismic-javascript";
import { GetServerSideProps } from "next";
import { client } from "../lib/prismic";
import Link from "next/link";
import PrismicDOM from "prismic-dom";

interface SearchProps {
    searchResults: Document[];
}

export default function Search({ searchResults }: SearchProps) {
    const [search, setSearch] = useState("");
    const router = useRouter();

    function handleSearch(e: FormEvent) {
        e.preventDefault();

        router.push(`/search?q=${encodeURIComponent(search)}`);

        setSearch("");
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
                <button type="submit">Search</button>
            </form>

            <div>
                {searchResults.map((product) => {
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
        </div>
    );
}

export const getServerSideProps: GetServerSideProps<SearchProps> = async (
    context
) => {
    const { q } = context.query;

    if (!q) {
        return { props: { searchResults: [] } };
    }

    const searchResults = await client().query([
        Prismic.Predicates.at("document.type", "product"),
        Prismic.Predicates.fulltext("my.product.title", String(q)),
    ]);

    return {
        props: { searchResults: searchResults.results },
    };
};
