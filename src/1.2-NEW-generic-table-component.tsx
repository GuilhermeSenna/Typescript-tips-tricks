/* Applied generics */

// import React from "react";

interface TableProps<TItem,> {
    items: {
        id: string;
        firstName: string;
    }[];
    renderItem: (item: TItem) => React.ReactNode;
}

export const Table = <TItem,>(props: TableProps<TItem>) => {
    return null;
}

export const Component = () => {
    return (
        <>
            <Table
                items={[{ id: "1", firstName: "Burke" }]}
                renderItem={(item) => {
                    return null
                }}
            ></Table>
            <Table
                items={[{ id: "1", name: "Bandit" }]}
                renderItem={(item) => {
                    return null
                }}
            ></Table>
        </>
    )
};
