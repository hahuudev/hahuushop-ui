import React, { useRef, forwardRef, useImperativeHandle } from "react";
import LinearProgress, { LinearProgressProps } from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export interface LinearProgressRef {
    setValue: (value: number) => void;
}
const LinearProgressWithLabel = forwardRef<LinearProgressRef, LinearProgressProps>((props, ref) => {
    const { value = 0, ...rest } = props;
    const progressRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
        setValue: (newValue: number) => {
            if (progressRef.current) {
                progressRef.current.childNodes[0].style.width = `${newValue}%`;
            }
        },
    }));

    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "100%", mr: 1 }}>
                <LinearProgress variant="determinate" {...rest} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(value)}%`}</Typography>
            </Box>
        </Box>
    );
});

LinearProgressWithLabel.displayName = "LinearProgressWithLabel";

export default LinearProgressWithLabel;
