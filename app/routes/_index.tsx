import type { MetaFunction } from "@remix-run/node";
import { json } from '@remix-run/node';
import { useFormHandler } from '~/features/lists/state/formhandler';

export let meta: MetaFunction = () => {
    return [{ title: "Shop-ls" }];
};

export let action: ActionFunction = async ({ request }) => {
    let formData = await request.formData();
    
    let item = formData.get('item');

    // TODO: Persist item somewhere, somehow...

    return json({ items: [item], ok: true });
}

export default function Index() {
    let { formRef, items, Form } = useFormHandler();

    return (
        <Form className="container" ref={formRef} method="post">
            <h1>Shop-ls</h1>
            <ul className="listContainer">
                <li>
                    <input type="text" name="item" placeholder="Add item..." />
                </li>
                {items.map((item, index) => (
                    <li key={`${item}_${index}`}>{item}</li>
                ))}
            </ul>
        </Form>
    );
}
