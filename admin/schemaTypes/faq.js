export default {
    name: "faq",
    title: "Frequently Asked Questions",
    type: "document",
    fields: [
        {
            name: 'qna',
            title: "Quesions and Answers",
            type: 'array',
            of: [
               { 
                type: 'object',
                fields: [
                    {name: 'question', title: 'question', type:"slug", validation: Rule => Rule.required().min(10)},
                    {name: 'answer', title: 'answer', type:"text", validation: Rule => Rule.required().min(10)}
                ]
            }
            ]
        }
    ]

}