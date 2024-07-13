import type { MetaFunction } from "@remix-run/node";
import { json } from '@remix-run/node';
import { ListForm } from '~/features/lists/views/list';

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
    return <ListForm />; 
};

