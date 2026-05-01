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
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F41789%2Fconversions%2Ftext-optimized.jpg&w=256&q=75",
        "price": 169,
        "weight": "500 г",
        "description": "Соус томатний, цибуля маринована, салямі, ковбаски баварські, курка ..."
    },
    {
        "id": 2,
        "name": "4 сири 30 см",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F35312%2Fconversions%2Ftext-optimized.jpg&w=256&q=75",
        "price": 155,
        "weight": "390 г",
        "description": "Соус вершковий, сир твердий, сир моцарела, сир дор блю, сир пармезан"
    },
    {
        "id": 3,
        "name": "White Chicken 30 см",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F57664%2Fconversions%2Ftext-optimized.jpg&w=256&q=75",
        "price": 155,
        "weight": "460 г",
        "description": "Соус вершковий, цибуля маринована, курка маринована, бекон, сир моцарела..."
    },
    {
        "id": 4,
        "name": "Баварська 30 см",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F41898%2Fconversions%2Ftext-optimized.jpg&w=256&q=75",
        "price": 155,
        "weight": "475 г",
        "description": "Соус томатний, ковбаски баварські, печериці, сир моцарела, перець ..."
    },
    {
        "id": 5,
        "name": "Гавайська 30 см",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F42016%2Fconversions%2Ftext-optimized.jpg&w=256&q=75",
        "price": 139,
        "weight": "435 г",
        "description": "Соус вершковий, цибуля маринована, курка маринована, ананас, сир моцарела"
    },
    {
        "id": 6,
        "name": "Карбонара 30 см",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F35709%2Fconversions%2Ftext-optimized.jpg&w=256&q=75",
        "price": 169,
        "weight": "445 г",
        "description": "Соус вершковий, бекон, сир моцарела, жовток, сир пармезан, перець чорний ..."
    },
    {
        "id": 7,
        "name": "Курка BBQ 30 см",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F44010%2Fconversions%2Ftext-optimized.jpg&w=256&q=75",
        "price": 135,
        "weight": "440 г",
        "description": "Соус BBQ, цибуля маринована, курка маринована, сир моцарела, кукурудза, ..."
    },
    {
        "id": 8,
        "name": "М'ясна BBQ 30 см",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F44122%2Fconversions%2Ftext-optimized.jpg&w=256&q=75",
        "price": 155,
        "weight": "480 г",
        "description": "Соус BBQ, цибуля маринована, ковбаски баварські, курка маринована, бекон, си..."
    },
    {
        "id": 9,
        "name": "Маргарита 30 см",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F42125%2Fconversions%2Ftext-optimized.jpg&w=256&q=75",
        "price": 79,
        "weight": "400 г",
        "description": "Соус томатний, сир моцарела, помідор"
    },
    {
        "id": 10,
        "name": "Мисливська тру 30 см",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F34878%2Fconversions%2Ftext-optimized.jpg&w=256&q=75",
        "price": 155,
        "weight": "480 г",
        "description": "Соус томатний, цибуля маринована, ... (ГОСТРЕ)"
    },
    {
        "id": 11,
        "name": "Пепероні 30 см",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F36113%2Fconversions%2Ftext-optimized.jpg&w=256&q=75",
        "price": 185,
        "weight": "425 г",
        "description": "Соус томатний, сир моцарела, пепероні, перець халапеньйо (ГОСТРЕ)"
    },
    {
        "id": 12,
        "name": "Салямі White 30 см",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F34320%2Fconversions%2Ftext-optimized.jpg&w=256&q=75",
        "price": 115,
        "weight": "440 г",
        "description": "Соус вершковий, цибуля маринована, ковбаски баварські, салямі, сир ..."
    },
    {
        "id": 13,
        "name": "Сирна салямі 30 см",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F34420%2Fconversions%2Ftext-optimized.jpg&w=256&q=75",
        "price": 125,
        "weight": "415 г",
        "description": "Соус томатний, салямі, сир моцарела"
    },
    {
        "id": 14,
        "name": "Сирне курча 30 см",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F35310%2Fconversions%2Ftext-optimized.jpg&w=256&q=75",
        "price": 139,
        "weight": "430 г",
        "description": "Соус вершковий, курка маринована, сир твердий, сир моцарела"
    },
    {
        "id": 15,
        "name": "Франческа 30 см",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F45200%2Fconversions%2Ftext-optimized.jpg&w=256&q=75",
        "price": 155,
        "weight": "455 г",
        "description": "Соус томатний, салямі, печериці, помідор, сир моцарела, маринований ..."
    },
    {
        "id": 16,
        "name": "Цезар 30 см",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F44277%2Fconversions%2Ftext-optimized.jpg&w=256&q=75",
        "price": 169,
        "weight": "490 г",
        "description": "Соус вершковий, курка маринована, сир моцарела, салат Айсберг, Соус Цезар, ..."
    },
    {
        "id": 17,
        "name": "Чізбургер 30 см",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F69516%2Fconversions%2Ftext-optimized.jpg&w=256&q=75",
        "price": 229,
        "weight": "540 г",
        "description": "Соус BBQ, цибуля маринована, курка маринована, сир моцарела, огірок ..."
    },
    {
        "id": 18,
        "name": "Вершковий лосось 30 см",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F40766%2Fconversions%2Ftext-optimized.jpg&w=256&q=75",
        "price": 255,
        "weight": "500 г",
        "description": "Соус вершково-шпинатний, сир моцарела, лосось, помідори, маслини, ..."
    },
    {
        "id": 19,
        "name": "Грецька 30 см",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F40493%2Fconversions%2Ftext-optimized.jpg&w=256&q=75",
        "price": 225,
        "weight": "565 г",
        "description": "Соус вершковий, курка маринована, сир моцарела, помідори, салат Айсберг, си..."
    },
    {
        "id": 20,
        "name": "Тунець 30 см",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F40584%2Fconversions%2Ftext-optimized.jpg&w=256&q=75",
        "price": 195,
        "weight": "460 г",
        "description": "Соус вершково-шпинатний, цибуля маринована, сир моцарела, тунець, ..."
    },
    {
        "id": 21,
        "name": "М'ясна Crispy 30 см",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F47030%2Fconversions%2Ftext-optimized.jpg&w=256&q=75",
        "price": 175,
        "weight": "450 г",
        "description": "Соус вершковий, сир моцарела, бекон, пепероні, цибуля crispy, соус сирний, ..."
    },
    {
        "id": 22,
        "name": "Сирна Груша 30 см",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F47081%2Fconversions%2Ftext-optimized.jpg&w=256&q=75",
        "price": 185,
        "weight": "470 г",
        "description": "Соус вершковий, сир моцарела, сир дорблю, груша, соус медово-гірчичний,..."
    },
    {
        "id": 23,
        "name": "Грибна Брі 30 см",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F55048%2Fconversions%2Ftext-optimized.jpg&w=256&q=75",
        "price": 249,
        "weight": "470 г",
        "description": "Соус вершковий, печериці, сир моцарела, сир Брі, спеція: томат, базилі..."
    },
    {
        "id": 24,
        "name": "Шинка BBQ 30 см",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F55183%2Fconversions%2Ftext-optimized.jpg&w=256&q=75",
        "price": 169,
        "weight": "460 г",
        "description": "Соус BBQ, шинка, сир моцарела, кукурудза, перець болгарський, ..."
    },
    {
        "id": 25,
        "name": "Шинка Гриби 30 см",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F54913%2Fconversions%2Ftext-optimized.jpg&w=256&q=75",
        "price": 169,
        "weight": "450 г",
        "description": "Соус вершковий, шинка, печериці, сир моцарела, помідор"
    },
    {
        "id": 26,
        "name": "Курка Гриби 30 см",
        "image": "https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F71152%2Fconversions%2Ftext-optimized.jpg&w=256&q=75",
        "price": 135,
        "weight": "435 г",
        "description": "Соус вершково-шпинатний, цибуля маринована, курка маринована, ..."
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