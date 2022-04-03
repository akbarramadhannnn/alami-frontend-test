import React, { Fragment, memo } from "react";
import Table, { Tr, Thead, Th, Tbody, Td } from "./TableStyle";

const TheadComponent = memo(({ children }) => <Thead>{children}</Thead>);
const TrComponent = memo(({ children }) => <Tr>{children}</Tr>);
const ThComponent = memo(({ data }) => <Th>{data}</Th>);
const TbodyComponent = memo(({ children }) => <Tbody>{children}</Tbody>);
const TdComponent = memo(({ data }) => <Td>{data}</Td>);

const TableComponent = ({
  column = [],
  data = [],
  isLoading = false,
  error,
}) => {
  return (
    <Fragment>
      <div style={{ position: "relative" }}>
        <Table>
          <TheadComponent>
            <TrComponent>
              <ThComponent data="No" />
              {column.map((data, index) => (
                <ThComponent key={index} data={data} />
              ))}
            </TrComponent>
          </TheadComponent>

          {!isLoading &&
            data &&
            data.length > 0 &&
            data.map((item, indexItem) => (
              <TbodyComponent key={indexItem}>
                <TrComponent>
                  <TdComponent data={indexItem + 1} />
                  {Object.keys(item).length > 0 &&
                    Object.keys(item).map((obj, indexObj) => (
                      <TdComponent key={indexObj} data={item[obj]} />
                    ))}
                </TrComponent>
              </TbodyComponent>
            ))}
        </Table>

        {isLoading && (
          <div
            style={{
              position: "absolute",
              top: 0,
              width: "100%",
              background: "#555555",
              opacity: ".3",
              height: "400px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2 style={{ color: "#ffffff", fontSize: 30 }}>Loading...</h2>
          </div>
        )}

        {!isLoading && error?.status && (
          <div
            style={{
              position: "absolute",
              top: 0,
              width: "100%",
              background: "transparent",
              opacity: ".3",
              height: "400px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>{error.message}</h2>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default memo(TableComponent);
