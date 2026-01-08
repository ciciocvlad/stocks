import { useState } from 'react'
import { Box, useTheme } from '@mui/material'
import { ItemContainer } from './ItemContainer'
import classes from './Items.module.css'

const items = [
  {
    id: 1,
    name: 'USB-C Cable',
    category: 'Accessories',
    price: 9.99,
    stock: 500,
    min_stock: 50
  },
  {
    id: 2,
    name: 'HDMI Cable',
    category: 'Accessories',
    price: 12.99,
    stock: 480,
    min_stock: 50
  },
  {
    id: 3,
    name: 'Ethernet Cable',
    category: 'Accessories',
    price: 8.99,
    stock: 450,
    min_stock: 40
  },
  {
    id: 4,
    name: 'Mouse Pad',
    category: 'Accessories',
    price: 6.99,
    stock: 420,
    min_stock: 30
  },
  {
    id: 5,
    name: 'Wireless Mouse',
    category: 'Accessories',
    price: 29.99,
    stock: 390,
    min_stock: 30
  },
  {
    id: 6,
    name: 'Keyboard Wrist Rest',
    category: 'Accessories',
    price: 14.99,
    stock: 360,
    min_stock: 25
  },
  {
    id: 7,
    name: 'Laptop Stand',
    category: 'Accessories',
    price: 39.99,
    stock: 330,
    min_stock: 20
  },
  {
    id: 8,
    name: 'USB Flash Drive 64GB',
    category: 'Storage',
    price: 19.99,
    stock: 310,
    min_stock: 30
  },
  {
    id: 9,
    name: 'USB Flash Drive 128GB',
    category: 'Storage',
    price: 29.99,
    stock: 295,
    min_stock: 25
  },
  {
    id: 10,
    name: 'External SSD 1TB',
    category: 'Storage',
    price: 119.99,
    stock: 280,
    min_stock: 20
  },

  {
    id: 11,
    name: 'External HDD 2TB',
    category: 'Storage',
    price: 89.99,
    stock: 265,
    min_stock: 20
  },
  {
    id: 12,
    name: 'Wireless Keyboard',
    category: 'Accessories',
    price: 49.99,
    stock: 250,
    min_stock: 15
  },
  {
    id: 13,
    name: 'Mechanical Keyboard',
    category: 'Accessories',
    price: 149.99,
    stock: 235,
    min_stock: 15
  },
  {
    id: 14,
    name: 'Webcam 1080p',
    category: 'Peripherals',
    price: 59.99,
    stock: 220,
    min_stock: 15
  },
  {
    id: 15,
    name: 'Webcam 4K',
    category: 'Peripherals',
    price: 129.99,
    stock: 210,
    min_stock: 15
  },
  {
    id: 16,
    name: 'Noise Cancelling Headphones',
    category: 'Audio',
    price: 199.99,
    stock: 200,
    min_stock: 15
  },
  {
    id: 17,
    name: 'Bluetooth Speaker',
    category: 'Audio',
    price: 79.99,
    stock: 190,
    min_stock: 15
  },
  {
    id: 18,
    name: 'Desk Lamp',
    category: 'Office',
    price: 34.99,
    stock: 180,
    min_stock: 10
  },
  {
    id: 19,
    name: 'Office Chair',
    category: 'Office',
    price: 249.99,
    stock: 170,
    min_stock: 10
  },
  {
    id: 20,
    name: 'Standing Desk',
    category: 'Office',
    price: 599.99,
    stock: 160,
    min_stock: 10
  },

  {
    id: 21,
    name: '27" Monitor',
    category: 'Displays',
    price: 399.99,
    stock: 150,
    min_stock: 10
  },
  {
    id: 22,
    name: '24" Monitor',
    category: 'Displays',
    price: 249.99,
    stock: 145,
    min_stock: 10
  },
  {
    id: 23,
    name: '34" Ultrawide Monitor',
    category: 'Displays',
    price: 699.99,
    stock: 140,
    min_stock: 10
  },
  {
    id: 24,
    name: 'Monitor Arm',
    category: 'Accessories',
    price: 89.99,
    stock: 135,
    min_stock: 10
  },
  {
    id: 25,
    name: 'Laptop Backpack',
    category: 'Bags',
    price: 69.99,
    stock: 130,
    min_stock: 10
  },
  {
    id: 26,
    name: 'Laptop Sleeve',
    category: 'Bags',
    price: 29.99,
    stock: 125,
    min_stock: 10
  },
  {
    id: 27,
    name: 'Smartphone Stand',
    category: 'Accessories',
    price: 14.99,
    stock: 120,
    min_stock: 10
  },
  {
    id: 28,
    name: 'Wireless Charger',
    category: 'Accessories',
    price: 24.99,
    stock: 115,
    min_stock: 10
  },
  {
    id: 29,
    name: 'Power Bank 20000mAh',
    category: 'Power',
    price: 49.99,
    stock: 110,
    min_stock: 10
  },
  {
    id: 30,
    name: 'Surge Protector',
    category: 'Power',
    price: 34.99,
    stock: 105,
    min_stock: 10
  },

  {
    id: 31,
    name: 'Laptop 13"',
    category: 'Computers',
    price: 1099.99,
    stock: 100,
    min_stock: 10
  },
  {
    id: 32,
    name: 'Laptop 15"',
    category: 'Computers',
    price: 1399.99,
    stock: 95,
    min_stock: 10
  },
  {
    id: 33,
    name: 'Desktop PC',
    category: 'Computers',
    price: 1599.99,
    stock: 90,
    min_stock: 10
  },
  {
    id: 34,
    name: 'Mini PC',
    category: 'Computers',
    price: 799.99,
    stock: 85,
    min_stock: 10
  },
  {
    id: 35,
    name: 'Graphics Card',
    category: 'Components',
    price: 699.99,
    stock: 80,
    min_stock: 10
  },
  {
    id: 36,
    name: 'CPU',
    category: 'Components',
    price: 399.99,
    stock: 78,
    min_stock: 10
  },
  {
    id: 37,
    name: 'Motherboard',
    category: 'Components',
    price: 249.99,
    stock: 75,
    min_stock: 10
  },
  {
    id: 38,
    name: 'RAM 16GB',
    category: 'Components',
    price: 89.99,
    stock: 72,
    min_stock: 10
  },
  {
    id: 39,
    name: 'RAM 32GB',
    category: 'Components',
    price: 169.99,
    stock: 70,
    min_stock: 10
  },
  {
    id: 40,
    name: 'Power Supply 750W',
    category: 'Components',
    price: 129.99,
    stock: 68,
    min_stock: 10
  },

  {
    id: 41,
    name: 'PC Case',
    category: 'Components',
    price: 109.99,
    stock: 65,
    min_stock: 10
  },
  {
    id: 42,
    name: 'CPU Cooler',
    category: 'Components',
    price: 59.99,
    stock: 62,
    min_stock: 10
  },
  {
    id: 43,
    name: 'Case Fan',
    category: 'Components',
    price: 14.99,
    stock: 60,
    min_stock: 10
  },
  {
    id: 44,
    name: 'Thermal Paste',
    category: 'Components',
    price: 7.99,
    stock: 58,
    min_stock: 10
  },
  {
    id: 45,
    name: 'NAS 2-Bay',
    category: 'Storage',
    price: 399.99,
    stock: 55,
    min_stock: 10
  },
  {
    id: 46,
    name: 'Router',
    category: 'Networking',
    price: 129.99,
    stock: 52,
    min_stock: 10
  },
  {
    id: 47,
    name: 'Mesh WiFi System',
    category: 'Networking',
    price: 299.99,
    stock: 50,
    min_stock: 10
  },
  {
    id: 48,
    name: 'Network Switch',
    category: 'Networking',
    price: 89.99,
    stock: 48,
    min_stock: 10
  },
  {
    id: 49,
    name: 'Security Camera',
    category: 'Security',
    price: 99.99,
    stock: 45,
    min_stock: 10
  },
  {
    id: 50,
    name: 'Smart Doorbell',
    category: 'Security',
    price: 179.99,
    stock: 42,
    min_stock: 10
  },

  {
    id: 51,
    name: 'Tablet',
    category: 'Mobile',
    price: 499.99,
    stock: 40,
    min_stock: 10
  },
  {
    id: 52,
    name: 'E-Reader',
    category: 'Mobile',
    price: 129.99,
    stock: 38,
    min_stock: 10
  },
  {
    id: 53,
    name: 'Smartwatch',
    category: 'Wearables',
    price: 249.99,
    stock: 35,
    min_stock: 10
  },
  {
    id: 54,
    name: 'Fitness Tracker',
    category: 'Wearables',
    price: 99.99,
    stock: 32,
    min_stock: 10
  },
  {
    id: 55,
    name: 'VR Headset',
    category: 'Gaming',
    price: 399.99,
    stock: 30,
    min_stock: 10
  },
  {
    id: 56,
    name: 'Game Controller',
    category: 'Gaming',
    price: 69.99,
    stock: 28,
    min_stock: 10
  },
  {
    id: 57,
    name: 'Gaming Keyboard',
    category: 'Gaming',
    price: 129.99,
    stock: 26,
    min_stock: 10
  },
  {
    id: 58,
    name: 'Gaming Mouse',
    category: 'Gaming',
    price: 79.99,
    stock: 24,
    min_stock: 10
  },
  {
    id: 59,
    name: 'Streaming Microphone',
    category: 'Audio',
    price: 149.99,
    stock: 22,
    min_stock: 10
  },
  {
    id: 60,
    name: 'Audio Interface',
    category: 'Audio',
    price: 199.99,
    stock: 20,
    min_stock: 30
  }
]

export const Items = () => {
  const [sorted, setSorted] = useState(items.toReversed())
  const { palette } = useTheme()

  const sort = () =>
    setSorted(
      sorted.toSorted((a, b) => a.stock - a.min_stock - (b.stock - b.min_stock))
    )

  return (
    <Box
      className={classes.container}
      sx={{ backgroundColor: palette.background.paper }}
    >
      {sorted.map(item => (
        <ItemContainer key={item.id} item={item} sort={sort} />
      ))}
    </Box>
  )
}
