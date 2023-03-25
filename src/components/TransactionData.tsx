import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function TransactionData() {
  return (
    <TableContainer marginTop={12}>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>from</Th>
            <Th>to</Th>
            <Th isNumeric>amount</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>0x8e4a6CaB4012739Daf4E047D04c47afE50C86B19</Td>
            <Td>0x8e4a6CaB4012739Daf4E047D04c47afE50C86B19</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>from</Th>
            <Th>to</Th>
            <Th isNumeric>amount</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
