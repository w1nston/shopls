import { useEffect, useState, useRef } from 'react';
import { useFetcher } from '@remix-run/react';

export function useFormHandler() {
    let fetcher = useFetcher();
    let [items, setItems] = useState<string[]>([]);
    let formRef = useRef<HTMLFormElement | null>(null);

    useEffect(() => {
        if (fetcher.state === 'idle' && fetcher.data?.ok) {
            setItems((prev) => prev.concat(fetcher.data?.items));
            formRef.current?.reset();
        }
    }, [fetcher.state, fetcher.data]);
    return { formRef, items, Form: fetcher.Form };
}

