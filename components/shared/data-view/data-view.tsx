import styles from "./DataView.module.css";
import React from "react";

type Props = {
  sectionName: string;
  content: {
    data: any;
    collections: any;
  };
};

export const DataView: React.FC<Props> = ({ sectionName, content }) => {
  if (!content) return null;
  const { data, collections } = { ...content };
  const hasData = data || collections;
  if (hasData) {
    return (
      <div className={styles.dataView}>
        {sectionName && (
          <div className={styles.header}>
            <h2>{sectionName}</h2>
          </div>
        )}
        <div className={styles.body}>
          <div className={styles.data}>
            <h3>Data</h3>
            {(!data || Object.keys(data).length === 0) && (
              <p>No data</p>
            )}
            <ul>
              {data &&
                Object.keys(data).length > 0 &&
                Object.keys(data).map((attributeName) => (
                  <li key={attributeName}>
                    {attributeName}:
                    {Array.isArray(data[attributeName]) ? (
                      <ul>
                        {data[attributeName].map((item, index) => (
                          <li key={index}>
                            <ul>
                              {Object.keys(item).map((key) => (
                                <li key={key}>
                                  {key}: {item[key]}
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    ) : typeof data[attributeName] === "object" ? (
                      <ul>
                        {Object.keys(data[attributeName]).map((key) => (
                          <li key={key}>
                            {key}: {data[attributeName][key]}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      data[attributeName]
                    )}
                  </li>
                ))}
            </ul>
          </div>
          <div className={styles.collections}>
            <h3>Collections</h3>
            {(!collections || Object.keys(collections).length === 0) && (
              <p>No collections</p>
            )}
            <ul>
              {collections &&
                Object.keys(collections).length > 0 &&
                Object.keys(collections).map((collectionName) => (
                  <>
                    <li key={collectionName}>{collectionName}</li>
                    {collections[collectionName].map((item: any, i: number) => (
                      <ul>
                        <li>{`[${i}]`}</li>
                        <ul>
                          {item &&
                            Object.keys(item).length > 0 &&
                            Object.keys(item).map((attributeName) => (
                              <li key={attributeName}>
                                {attributeName}: {item[attributeName]}
                              </li>
                            ))}
                        </ul>
                      </ul>
                    ))}
                  </>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
