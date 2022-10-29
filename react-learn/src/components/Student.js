import React from 'react'

export default function Student(props) {
    // 假设所有学生的信息都是分开传递的
    return (
        <li>
            {/* 显示学生的所有数据 */}
            【姓名：】{props.name}，
            【email：】{props.email}，
            【性别：】{props.sex === 1 ? '男' : '女'}，
            【出生年份：】{props.birth}
        </li>
    )
}
