import React from 'react'
import { storiesOf } from '@storybook/react'

import ModalBody from '_atoms/modal-body'
import loginIcon from '_images/login-icon.svg'
import CloseIcon from '_atoms/close-icon'
import ModalHeader from '_atoms/modal-header'
import ModalFooter from '_atoms/modal-footer'
import Button from '_atoms/button'

import Modal from './index'

storiesOf('Modal', module).add('Modal', () => (
  <Modal>
    <ModalHeader>Happy Text</ModalHeader>
    <ModalBody>
      we will have a super time. Sometimes you learn more from your mistakes than you do from your
      masterpieces.
    </ModalBody>
    <ModalFooter>
      <Button iconURL={loginIcon} isBlock>
        Go Crazy
      </Button>
    </ModalFooter>
  </Modal>
))

storiesOf('Modal', module).add('Modal with Two Buttons', () => (
  <Modal>
    <ModalHeader>Happy Text</ModalHeader>
    <ModalBody>
      we will have a super time. Sometimes you learn more from your mistakes than you do from your
      masterpieces.
    </ModalBody>
    <ModalFooter>
      <Button iconURL={loginIcon} isBlock>
        Go Crazy
      </Button>
      <Button iconURL={loginIcon} isBlock>
        Go Crazy
      </Button>
    </ModalFooter>
  </Modal>
))

storiesOf('Modal', module).add('Modal with an X', () => (
  <Modal>
    <ModalHeader closeIcon={<CloseIcon />}>Super Happy Text</ModalHeader>
    <ModalBody>
      we will have a super time. Sometimes you learn more from your mistakes than you do from your
      masterpieces.
    </ModalBody>
    <ModalFooter>
      <Button iconURL={loginIcon} isBlock>
        Go Crazy
      </Button>
    </ModalFooter>
  </Modal>
))
