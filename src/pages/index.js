import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import styled from 'styled-components'
import dynamic from 'next/dynamic'

const KonvaComponent = dynamic(() => import('../components/KonvaComponent'), { ssr: false })


export default function Home() {
  return (
    <>
      <KonvaComponent />
    </>
  )
}

const DivContainer = styled.div`
  margin: 0;
  padding: 0;
`;