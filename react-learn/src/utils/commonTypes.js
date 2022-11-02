import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    children: PropTypes.node,
    groupDatas: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })), // 多选框组、单选框组、下拉列表的数据源
    chooseDatas: PropTypes.arrayOf(PropTypes.string)
}

