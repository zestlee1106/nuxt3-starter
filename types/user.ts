export type UserState = {
  userInfo: UserInfo
  menuList: Menu
}

export type UserInfo = {
  id?: string
  name?: string
  companyName?: string
  companyCode?: string
  departmentCode?: string
  departmentName?: string
  managerId?: string
  location?: string
  tel?: Tel
  phone?: Phone
  role?: Role[]
  staff?: {
    code: string
  }
} | null

type Menu = {}

type Tel = {
  countryId: string
  countryValue: string
  countryName: string
}

type Phone = Tel & {
  number: string
}

type Role = {
  code: string
  label: string
}
