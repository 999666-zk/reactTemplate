import { FC } from 'react'
import { Select, Button } from 'antd'

const onChange = (value: string) => {
  console.log(value)
}

const onSearch = (value: string) => {
  console.log(value)
}

const ToolBar: FC = () => (
  <div className="w-full h-full flex justify-around items-center">
    <Select
      showSearch
      placeholder="搜索帮助文档"
      size="large"
      optionFilterProp="label"
      showArrow={false}
      allowClear={true}
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
      style={{ width: '320px' }}
      options={[
        { value: 'useQflow', label: '使用轻流' },
        { value: 'useQBI', label: '使用轻析' },
      ]}
    ></Select>
    <Button size="large" onClick={() => window.open('https://www.qingflow.com')}>
      返回轻流
    </Button>
  </div>
)
export default ToolBar
