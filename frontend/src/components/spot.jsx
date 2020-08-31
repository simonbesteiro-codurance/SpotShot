import React from "react";
import { Text, View, Image } from "react-native";
import stylesSpot from "../styles/spot-style";

export default function Spot() {
  const imageURL = {
    uri:
      "https://cdn.civitatis.com/espana/barcelona/galeria/interior-sagrada-familia-barcelona.jpg",
  };
  const favouriteLogoURL = {
    uri: "https://www.flaticon.com/premium-icon/icons/svg/707/707680.svg",
  };
  const rateLogoURL = {
    uri: "https://www.flaticon.es/premium-icon/icons/svg/3024/3024136.svg",
  };
  const descriptionText =
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat";
  return (
    <>
      <View style={stylesSpot.container}>
        <Image style={stylesSpot.photo} source={imageURL} />
        <View style={stylesSpot.main}>
          <View style={stylesSpot.mainRate}>
            <Image style={stylesSpot.rateLogo} source={rateLogoURL} />
            <Image style={stylesSpot.rateLogo} source={rateLogoURL} />
            <Image style={stylesSpot.rateLogo} source={rateLogoURL} />
            <Image style={stylesSpot.rateLogo} source={rateLogoURL} />
            <Image style={stylesSpot.rateLogo} source={rateLogoURL} />
          </View>
          <Image style={stylesSpot.favouriteLogo} source={favouriteLogoURL} />
        </View>
        <View style={stylesSpot.description}>
          <Text style={stylesSpot.descriptionText}>{descriptionText}</Text>
        </View>
      </View>
    </>
  );
}
