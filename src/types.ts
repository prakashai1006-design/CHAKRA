export interface Ingredient {
  id: string;
  name: string;
  unit: 'kg' | 'liter' | 'pcs' | 'gm';
  category: string;
}

export interface Vendor {
  id: string;
  name: string;
  contactName: string;
  location: string;
}

export interface VendorMapping {
  id: string;
  ingredientId: string;
  vendorId: string;
  price: number;
  zone: string;
}

export interface Recipe {
  id: string;
  name: string;
  ingredients: {
    ingredientId: string;
    quantity: number;
  }[];
  baseYield: number;
  category: string;
}

export interface InventoryItem {
  id: string;
  ingredientId: string;
  batchNumber: string;
  quantity: number;
  location: string;
  expiryDate: string;
}

export interface PurchaseOrder {
  id: string;
  vendorId: string;
  status: 'draft' | 'sent' | 'received' | 'cancelled';
  zone: string;
  totalAmount: number;
  createdAt: string;
}

export interface Location {
  id: string;
  name: string;
  city: string;
  type: 'warehouse' | 'production';
}
