import { LineChart as Lc, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
const LineChart = () => {
    const subjectData = [
        { student: "Student 1", math: 75, physics: 82, chemistry: 78 },
        { student: "Student 2", math: 82, physics: 88, chemistry: 80 },
        { student: "Student 3", math: 90, physics: 85, chemistry: 87 },
        { student: "Student 4", math: 65, physics: 70, chemistry: 72 },
        { student: "Student 5", math: 88, physics: 92, chemistry: 85 },
        { student: "Student 6", math: 72, physics: 78, chemistry: 80 },
        { student: "Student 7", math: 80, physics: 85, chemistry: 83 },
        { student: "Student 8", math: 91, physics: 89, chemistry: 90 },
        { student: "Student 9", math: 85, physics: 87, chemistry: 86 },
        { student: "Student 10", math: 78, physics: 80, chemistry: 79 },
    ];
    return (
        <div>
            <Lc width={400} height={400} data={subjectData}>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <CartesianGrid></CartesianGrid>

                <Line dataKey="math" stroke='red' ></Line>
                <Line dataKey="physics" stroke='green'></Line>
                <Line dataKey="chemistry" ></Line>
            </Lc>
        </div>
    );
};

export default LineChart;