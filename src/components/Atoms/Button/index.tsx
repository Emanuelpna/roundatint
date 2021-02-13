import React, { ButtonHTMLAttributes, ReactNode } from "react"

import * as S from './styles'

type ButtonProps = {
    children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({children}:ButtonProps) {
    return <S.Button>{children}</S.Button>
}