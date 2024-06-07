import { useEffect, useState } from 'react';

export const useDebouce = <T>(value: T, delay = 500) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [debounceValue, setDebounceValue] = useState<T>(value);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebounceValue(value);
		}, delay);

		return () => clearTimeout(timeout);
	}, [value, delay]);
};
  