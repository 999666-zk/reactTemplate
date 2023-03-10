import { FC } from 'react'

import { useQuery } from 'react-query'

import ReactMarkdown from 'react-markdown'

import { getDocs } from '../../requests'

const HelpDocs: FC = () => {
  const { data, isLoading } = useQuery('docs', getDocs)
  console.log(data?.data?.data[0]?.test)

  if (!isLoading) {
    return (
      <>
        <div>帮助文档</div>
        <ReactMarkdown>{data?.data?.data[0]?.test}</ReactMarkdown>
      </>
    )
  } else {
    return <div>帮助文档</div>
  }
}

export default HelpDocs
