import { Box, Container, MenuItem, Select } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getProfit } from "../common/Inquiries/Profit";
import moment from "moment";

export default function ProfitLog() {
  const [profitData, setProfitData] = useState(null as any);
  const [filter, setFilter] = useState({} as any);

  useEffect(() => {
    handleProfit();
  }, [])

  const handleProfit = async () => {
    const res = await getProfit();
    console.log('data', res.data)
    setProfitData(res.data);
  }

  const handleFilter = (month?: string, year?: string) => {
    if (year === '-') {
      setFilter({...filter, year: null});
      return
    }
    if (month === '-') {
      setFilter({...filter, month: null});
      return
    }
    if (month) {
      setFilter({...filter, month})
    }
    if (year) {
      setFilter({...filter, year})
    }
  }

  console.log(`filter`, filter)


  return (
    <Container className='profitLog'>
      <Box className='profitLog__head'>
        <h2>Profit log</h2>
        <Box>
          <Select className='profitLog-select' defaultValue="-" onChange={(e: any) => handleFilter(e.target.value)}>
            <MenuItem value="-">-</MenuItem>
            {profitData && (
              profitData.map((d: any) => moment(d.date).format('MMMM')).filter((v: any, i: any, a: string | any[]) => a.indexOf(v) === i).map((d: any) => (
                <MenuItem value={d}>{d}</MenuItem>
              ))
            )}
          </Select>
          <Select className='profitLog-select' defaultValue='-' onChange={(e: any) => handleFilter(undefined, e.target.value)}>
            <MenuItem value="-">-</MenuItem>
            {profitData && (
              profitData.map((d: any) => moment(d.date).format('YYYY')).filter((v: any, i: any, a: string | any[]) => a.indexOf(v) === i).map((d: any) => (
                <MenuItem value={d}>{d}</MenuItem>
              ))
            )}
          </Select>
        </Box>
      </Box>
      <Box className='profitLog__table'>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>OTC Single</th>
              <th>OTC Linking</th>
              <th>Private</th>
              <th>Arbitrage</th>
            </tr>
          </thead>
          <tbody>
          {
            profitData && profitData.length > 0 && profitData.filter((item: any) => {
              if (filter.year && filter.month) {
                return moment(item.date).format('YYYY') === filter.year && moment(item.date).format('MMMM') === filter.month;
              }
              if (filter.year) {
                return moment(item.date).format('YYYY') === filter.year;
              } if (filter.month) {
                return moment(item.date).format('MMMM') === filter.month;
              }
              return item;
            }).map((item: any, index: number) => {
              return (
                <tr key={index}>
                  <td>{moment(item.date).format('YYYY MMM DD')}</td>
                  <td>{(item.single && item.single.UAH) || '-'}</td>
                  <td>{(item.linking && item.linking.USDT) || '-'}</td>
                  <td>{(item.private && `${item.private.USDT || '-'} USDT, ${item.private.UAH || '-'} UAH, ${item.private.USD || '-'} USD`) || '-'}</td>
                  <td>{(item.arbitrage && item.arbitrage.USDT) || '-'}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Box>
    </Container>
  )
}