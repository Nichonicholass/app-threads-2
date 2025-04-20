import { ReactNode } from 'react';

import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

export default function LabelText({
  children,
  labelTextClasname,
  required,
}: {
  children: ReactNode;
  labelTextClasname?: string;
  required?: boolean;
}) {
  return (
    <label>
      <Typography
        as='p'
        variant='bt'
        weight='bold'
        className={clsxm('text-xs text-typo-main', labelTextClasname)}
      >
        {children} {required && <span className='text-danger-main'>*</span>}
      </Typography>
    </label>
  );
}