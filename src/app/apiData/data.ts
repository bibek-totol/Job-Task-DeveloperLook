export async function getData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api`);
    return res.json();
}