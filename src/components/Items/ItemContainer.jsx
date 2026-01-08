import { useState } from 'react'
import {
  Card,
  CardContent,
  Typography,
  Input,
  Box,
  Chip,
  Divider,
  IconButton
} from '@mui/material'
import { Close, Done } from '@mui/icons-material'
import { motion } from 'motion/react'
import classes from './Items.module.css'

export const ItemContainer = ({ item, sort }) => {
  const [isInput, setIsInput] = useState(false)
  const [value, setValue] = useState(item.min_stock)

  const done = () => {
    item.min_stock = value
    setIsInput(false)
    sort()
  }

  const close = () => {
    setValue(item.min_stock)
    setIsInput(false)
  }

  return (
    <Card
      elevation={3}
      sx={{ maxWidth: 420 }}
      layout
      className={classes.item}
      component={motion.div}
    >
      <CardContent>
        <Typography variant="h5" fontWeight={600}>
          {item.name}
        </Typography>

        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          ID: {item.id}
        </Typography>

        <Divider sx={{ my: 1.5 }} />

        <Box className={classes.info}>
          <Typography variant="body2">
            <strong>Category:</strong>
          </Typography>
          <Typography variant="body2">{item.category}</Typography>

          <Typography variant="body2">
            <strong>Price:</strong>
          </Typography>
          <Typography variant="body2">${item.price.toFixed(2)}</Typography>

          <Typography variant="body2">
            <strong>Min stock:</strong>
          </Typography>
          {isInput ? (
            <Box className={classes.input_wrapper}>
              <Input
                autoFocus
                value={value}
                onChange={e => setValue(e.target.value)}
                inputProps={{ style: { padding: 0, height: 'fit-content' } }}
              />
              <Box className={classes.icons_wrapper}>
                <IconButton onClick={done} sx={{ padding: 0 }}>
                  <Done sx={{ color: 'green' }} />
                </IconButton>
                <IconButton onClick={close} sx={{ padding: 0 }}>
                  <Close sx={{ color: 'red' }} />
                </IconButton>
              </Box>
            </Box>
          ) : (
            <Typography onClick={() => setIsInput(true)}>
              {item.min_stock}
            </Typography>
          )}

          <Typography variant="body2">
            <strong>Stock:</strong>
          </Typography>
          <Box>
            <Chip
              size="small"
              label={`${item.stock} units`}
              color={item.stock > item.min_stock ? 'success' : 'error'}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}
