"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
	{ subject: "Science", score: 77 },
	{ subject: "Math", score: 60 },
	{ subject: "Computer", score: 80 },
	{ subject: "SST", score: 71 },
	{ subject: "Hindi", score: 71 },
	{ subject: "Sanskrit", score: 60 },
	{ subject: "English", score: 60 },
];

const chartConfig = {
	score: {
		label: "Score",
		color: "hsl(var(--chart-1))",
	},
} satisfies ChartConfig;

export function MarksChart() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Subject Marks</CardTitle>
				<CardDescription>Academic Performance out of 80</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart
						data={chartData}
						margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
					>
						<CartesianGrid vertical={false} strokeDasharray="3 3" />
						<XAxis
							dataKey="subject"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tick={{ fontSize: 12 }}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Bar dataKey="score" fill="#3B82F6" radius={8} />
					</BarChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col items-start gap-2 text-sm">
				<div className="flex gap-2 font-medium leading-none">
					Improvement by 4.5% this term <TrendingUp className="h-4 w-4" />
				</div>
				<div className="leading-none text-muted-foreground">
					Based on recent exam results.
				</div>
			</CardFooter>
		</Card>
	);
}
