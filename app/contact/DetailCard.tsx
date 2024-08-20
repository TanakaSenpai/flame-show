import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const DetailCard = ({ logo, title, content }: { logo: React.ReactNode; title: string;  content: string}) => {
  return (
    <div className="w-60">
      <Card className="flex flex-col w-56">
        <CardHeader>
          <CardTitle className="flex gap-2 items-center justify-center text-xl">
            {logo} {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-center'>{content}</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default DetailCard
