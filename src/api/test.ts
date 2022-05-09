import request from '@/utils/request';
interface IRowsItem {
  [propName: string]: string | number;
}

interface ITableData {
  AscDesc: string;
  CurrentPage: number;
  PageData: Array<IRowsItem>;
  PageSize: number;
  Total: number;
  TotalPage: number;
}

export const getProjectList = async (params) => {
  return await request<ITableData[]>({
    url: '/api/ms/Project/GetProjecList',
    method: 'POST',
    data: params,
  });
};
