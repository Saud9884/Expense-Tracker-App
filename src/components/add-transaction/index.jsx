import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

export default function TransactionForm({onClose, isOpen}) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <form>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add New Transaction</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Enter Description</FormLabel>
                <Input
                  placeholder="Enter Transaction Description"
                  name="description"
                  type="text"
                />
              </FormControl>
              <FormControl>
                <FormLabel mt={"2"}>Enter Amount</FormLabel>
                <Input
                  placeholder="Enter Transaction Amount"
                  name="amount"
                  type="number"
                />
              </FormControl>
              <RadioGroup mt="5">
                <Radio value="income" colorScheme="green" name="type" mr={"2"}>
                Income
                </Radio>
                <Radio value="expense" colorScheme="red" name="type">
                  Expense
                </Radio>
              </RadioGroup>
            </ModalBody>
            <ModalFooter>
              <Button mr={"4"} onClick={onClose}>Cancel</Button>
              <Button>Add</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}
