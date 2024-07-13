import { useFormHandler } from '~/features/lists/state/formhandler';

export function ListForm() {
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


