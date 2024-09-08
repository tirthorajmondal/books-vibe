import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, Cell, } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'purple'];
const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const PagesToRead = () => {

    const dataArray = JSON.parse(localStorage.getItem('read')) || [];
    console.log(dataArray);

    return (
        <div className='min-h-screen'>
            <div className="">
                <ResponsiveContainer width="100%" aspect={2.5} >
                    <BarChart data={dataArray}  >
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey="bookName" interval={'preserveStartEnd'} tick={{ stroke: '#303eff70', width: '200', fontSize: '12', }}  tickSize='' />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {dataArray.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PagesToRead;