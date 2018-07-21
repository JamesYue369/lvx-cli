const proxy_cas = '/cas'
const proxy_user = '/user'
const proxy_contract = '/contract'

const routers = {
  'userInfo': `${proxy_user}/userInfo/initUser`, //检索登陆用户信息
  'getUserName': `${proxy_user}/homePage/homePage`, //验证是否登陆
  'medicalList' : `/icare/medical/getMedicals`,
  'getMedical': `/icare/medical/getMedicalInfoByCode`
}
export default routers
