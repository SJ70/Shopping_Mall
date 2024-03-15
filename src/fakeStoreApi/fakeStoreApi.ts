export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export type Category = "all" | "men's clothing" | "women's clothing" | "electronics" | "jewelery";

export const categoriesTitle: Record<Category, string> = {
    "all": '모두',
    "men's clothing" : '남성의류',
    "women's clothing" : '여성의류',
    "electronics" : '전자기기',
    "jewelery" : '쥬얼리',
}

const getProducts = async (): Promise<IProduct[]> => {
    try {
        return await (await fetch("https://fakestoreapi.com/products")).json();
    }
    catch (e) {
        console.error(e);
        return [];
    }
};

export const getProductsByCategory = async (category: Category) => {
    const products = await getProducts();
    if (category === "all") {
        return products;
    }
    return products.filter(product => product.category === category);
}