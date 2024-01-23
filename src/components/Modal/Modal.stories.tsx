import { useState } from 'react';

import { Story } from '@ladle/react';

import Button from '~components/Button/Button';

import Portal from './Modal';

export const ModalStories: Story = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>open portal</button>
      <Portal
        footer={
          <>
            <div>Footer example</div>
            <Button type="button" variant="container">
              Clica aqui
            </Button>
          </>
        }
        isOpen={isOpen}
        onClickOutside={() => setOpen(false)}
        title="Modal Title"
      >
        CONTENT
      </Portal>
    </div>
  );
};
