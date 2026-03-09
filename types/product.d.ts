export interface IProduct {
	id: number;
	localizeInfos: { title: Record<string, string> };
	price: number | null;
	attributeValues: {
		description: { value: { htmlValue: string }[] };
		price: { value: number };
		pic: { value: { downloadLink: string } };
		p_title: { value: string };
		p_available: string;
	};
}
