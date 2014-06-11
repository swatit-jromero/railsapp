class RegistrationsController < Devise::RegistrationsController
 
    def create

        resource = User.new(user_params)

        if resource.save
            return render :json => {:success => true}
        else
            return render :json => {:success => false, :error => resource.errors.full_messages.to_sentence}
        end
    end

    private

        def user_params
            params.require(:user).permit(:email, :password, :password_confirmation)
        end
 
end