export default {
    name: "testimonials",
    title: "testimonials",
    type: "document",
    fields: [
        {
            name: "image",
            type: "image",
            title: "Image",

        },
        {
            name: "name",
            type: "string",
            title: "Name"
        },
        {
            name: "company",
            type: "string",
            title: "Company",
        },
        {
            name: "message",
            type: "text",
            title: "Message",
        },
    ]
}