import React from "react";
import {
  IonContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonCard,
  IonImg,
  IonRow,
  IonGrid,
  IonCol,
} from "@ionic/react";
import { pin, wifi, wine, warning, walk } from "ionicons/icons";

import "./ExploreContainer.css";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol size="6" size-md>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Admission</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonImg src="assets/images/admission.png" />
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size="6" size-md>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Notice</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonImg src="assets/images/file.png" />
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="6" size-md>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Tests</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonImg src="assets/images/checklist.png" />
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size="6" size-md>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Attendance</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonImg src="assets/images/checking-attendance.png" />
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default ExploreContainer;
