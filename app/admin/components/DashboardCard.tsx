import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'

const DashboardCard = ({title, number, bg} : {title: string, number: number, bg:string}) => {
  return (
      <Card className={`px-4 ${bg}`}>
          <CardHeader className='text-2xl text-white font-bold'>{title}</CardHeader>
          <CardContent className='text-xl text-white font-bold'>{ number }</CardContent>
    </Card>
  )
}

export default DashboardCard
