from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Pizza(BaseModel):
    id: int
    name: str
    price: int
    weight: str
    description: str
    image: str

pizza_db = [
    {
        "id": 1,
        "name": "4 м'яса 30 см",
        "price": 165,
        "weight": "550 g",
        "description": "Соус томатний, цибуля маринована, пепероні, шинка...",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F41789%2Fconversions%2Ftext-optimized.jpg&w=256&q=75"
    },
    {
        "id": 2,
        "name": "4 сири 30 см",
        "price": 165,
        "weight": "390 g",
        "description": "Соус вершковий, сир твердий, сир моцарела, сир дор...",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F35312%2Fconversions%2Ftext-optimized.jpg&w=256&q=75"
    },
    {
        "id": 3,
        "name": "Карбонара 30 см",
        "price": 169,
        "weight": "445 g",
        "description": "Соус вершковий, бекон, сир моцарела, жовток, сир...",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F35709%2Fconversions%2Ftext-optimized.jpg&w=256&q=75"
    },
    {
        "id": 4,
        "name": "Пеперонi 30 см",
        "price": 185,
        "weight": "425 g",
        "description": "Соус томатний, сир моцарела, пепероні, перець...",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F36113%2Fconversions%2Ftext-optimized.jpg&w=256&q=75"
    },
    {
        "id": 5,
        "name": "Гавайська 30 см",
        "price": 139,
        "weight": "435 g",
        "description": "Соус вершковий, цибуля маринована, курка маринована...",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F42016%2Fconversions%2Ftext-optimized.jpg&w=256&q=75"
    },
    {
        "id": 6,
        "name": "White Chicken 30 см",
        "price": 155,
        "weight": "460 g",
        "description": "Соус вершковий, цибуля маринована, курка маринована, бекон...",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F57664%2Fconversions%2Ftext-optimized.jpg&w=256&q=75"
    },
    {
        "id": 7,
        "name": "Маргарита 30 см",
        "price": 79,
        "weight": "400 g",
        "description": "Соус томатний, сир моцарела, помідор",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F42125%2Fconversions%2Ftext-optimized.jpg&w=256&q=75"
    },
    {
        "id": 8,
        "name": "Сирна Груша 30 см",
        "price": 185,
        "weight": "470 g",
        "description": "Соус вершковий, сир моцарела, сир дорблю, груша, соус ...",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F47081%2Fconversions%2Ftext-optimized.jpg&w=256&q=75"
    }
]

@app.get("/pizzas")
def get_pizzas():
    return pizza_db

@app.post("/pizzas")
def create_pizza(pizza: Pizza):
    pizza_db.append(pizza.dict())
    return {"message": "Піцу додано!", "pizza": pizza}

@app.delete("/pizzas/{pizza_id}")
def delete_pizza(pizza_id: int):
    global pizza_db
    pizza_db = [p for p in pizza_db if p["id"] != pizza_id]
    return {"message": f"Піцу з ID {pizza_id} видалено"}

@app.put("/pizzas/{pizza_id}")
def update_pizza(pizza_id: int, updated_pizza: Pizza):
    global pizza_db
    for index, p in enumerate(pizza_db):
        if p["id"] == pizza_id:
            pizza_db[index] = updated_pizza.dict()
            return {"message": f"Піца з ID {pizza_id} успішно оновлена!", "pizza": pizza_db[index]}
    return {"error": "Піцу не знайдено"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)