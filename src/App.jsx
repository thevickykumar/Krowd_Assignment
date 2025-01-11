'use client'

import { useState } from 'react'

export default function ItemListManager() {
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState('')

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem])
      setNewItem('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddItem()
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#2A2D3E] p-4">
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 bg-black text-white">
            <div className="w-4 h-4 bg-black flex items-center justify-center font-bold">
              H
            </div>
            <div className="w-4 h-4 bg-[#23C55E]"></div>
          </div>
          <h1 className="text-[#23C55E] text-xl">Item List Manager</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">Item List</h2>
        
        <div className="space-y-4">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter item"
            className="w-full p-3 bg-[#F5F5F5] border border-gray-200 rounded-sm"
          />
          
          <button
            onClick={handleAddItem}
            className="w-full bg-[#23C55E] text-white py-3 rounded-sm hover:bg-[#1EA952] transition-colors"
          >
            Add Item
          </button>

          {items.length > 0 && (
            <ul className="list-disc pl-5 space-y-2 flex flex-col items-center">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  )
}

