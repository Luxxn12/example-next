/* eslint-disable @next/next/no-img-element */
"use client"
import { getProduct } from "@/util/apis/product/api";
import { ProductType } from "@/util/apis/product/product";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isData, setData] = useState([])

  const fetchData = async () => {
    try {
      const response = await getProduct()
      console.log(response)
      setData(response?.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <section className=" mx-auto px-6 md:px-6 py-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {isData?.map((data: ProductType) => (
        <div
          key={data.id}
          className="bg-background rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in"
        >
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View {data.title}</span>
          </Link>
          <img
            src={data.image}
            alt={data.title}
            width={400}
            height={300}
            className="w-full h-60 object-cover animate-zoom-in"
            style={{ aspectRatio: "400/300", objectFit: "cover" }}
          />
          <div className="p-4 animate-slide-in">
            <h3 className="text-lg font-semibold">{data.title.substring(0,20)}...</h3>
            <p className="text-muted-foreground text-sm">{data.description.substring(0, 50)}...</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-primary font-semibold">${data.price}</span>
              <span className="text-muted-foreground text-sm">{data.category}</span>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <span className="text-muted-foreground text-sm">{data.rating.rate.toFixed(1)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
  )
}
