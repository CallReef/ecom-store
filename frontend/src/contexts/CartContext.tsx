'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { cartAPI } from '@/lib/api'
import { useAuth } from './AuthContext'

interface CartItem {
  id: number
  product_id: number
  quantity: number
  product: {
    id: number
    name: string
    price: number
    image_url?: string
    stock_quantity: number
  }
}

interface CartContextType {
  items: CartItem[]
  loading: boolean
  addToCart: (productId: number, quantity: number) => Promise<void>
  removeFromCart: (itemId: number) => Promise<void>
  updateQuantity: (itemId: number, quantity: number) => Promise<void>
  clearCart: () => Promise<void>
  getTotalPrice: () => number
  getTotalItems: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(false)
  
  // Only use useAuth after component is mounted on client side
  let user = null
  if (mounted && typeof window !== 'undefined') {
    try {
      const authContext = useAuth()
      user = authContext?.user
    } catch (error) {
      // Ignore auth context errors during SSR
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && user) {
      fetchCart()
    } else if (mounted) {
      setItems([])
    }
  }, [user, mounted])

  const fetchCart = async () => {
    try {
      setLoading(true)
      const response = await cartAPI.getCart()
      setItems(response.data.items || [])
    } catch (error) {
      console.error('Failed to fetch cart:', error)
    } finally {
      setLoading(false)
    }
  }

  const addToCart = async (productId: number, quantity: number) => {
    try {
      await cartAPI.addToCart(productId, quantity)
      await fetchCart()
    } catch (error) {
      throw error
    }
  }

  const removeFromCart = async (itemId: number) => {
    try {
      await cartAPI.removeFromCart(itemId)
      await fetchCart()
    } catch (error) {
      throw error
    }
  }

  const updateQuantity = async (itemId: number, quantity: number) => {
    try {
      await cartAPI.updateCartItem(itemId, quantity)
      await fetchCart()
    } catch (error) {
      throw error
    }
  }

  const clearCart = async () => {
    try {
      await cartAPI.clearCart()
      setItems([])
    } catch (error) {
      throw error
    }
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.product.price * item.quantity), 0)
  }

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  const value = {
    items,
    loading,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
