const appkey = 'demo13_1545210570249';

/**
 * 获取所有学生
 */
export const getAllStudents = async () => {
    return await fetch(`http://api.duyiedu.com/api/student/findAll?appkey=${appkey}`)
        .then(resp => resp.json()).then(resp => resp.data);
}