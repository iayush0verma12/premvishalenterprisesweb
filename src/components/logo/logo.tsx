import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

interface Props {
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
  <Box onClick={onClick}>
      <Image
        src="/images/pve.svg"
        alt="Course Logo"
        width={80} // Adjust width as needed
        height={80} // Adjust height as needed
      />
  </Box>
  )
}


Logo.defaultProps = {
  variant: 'primary',
};

export default Logo;