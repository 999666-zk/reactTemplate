import { Spin } from 'antd'
import React, { FC, LazyExoticComponent } from 'react'

export const LazyImportComponent = (props: { lazyChildren: LazyExoticComponent<FC<object>> }) => {
  return (
    <React.Suspense fallback={<Spin />}>
      <props.lazyChildren />
    </React.Suspense>
  )
}
