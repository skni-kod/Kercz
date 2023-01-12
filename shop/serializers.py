from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token["email"] = user.email
        token["name"] = user.name
        token["last_name"] = user.last_name
        token["login"] = user.login
        token["phone_number"] = user.phone_number

        return token
