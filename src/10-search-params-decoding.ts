import { String, Union } from "ts-toolbelt";

const query = `/home?name=burke&profession=chat-baiter`;

type Query = typeof query;

type SecondQueryPart = String.Split<Query, "?">[1];

type QueryElements = String.Split<SecondQueryPart, "&">;

type Key = String.Split<QueryElements[0], "=">[0];
type Value = String.Split<QueryElements[0], "=">[1];

type QueryParams = {
    [QueryElement in QueryElements[number]]: {
        [Key in String.Split<QueryElement, "=">[0]]: String.Split<QueryElement, "=">[1];
    };
}[QueryElements[number]];

const obj: Union.Merge<QueryParams> = {
    name: "burke",
    profession: "chat-baiter"
}
